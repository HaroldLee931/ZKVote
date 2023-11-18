import { Box, Button, Divider, Heading, HStack, Link, Text, useBoolean, VStack } from "@chakra-ui/react"
import { Group } from "@semaphore-protocol/group"
import { Identity } from "@semaphore-protocol/identity"
import { generateProof } from "@semaphore-protocol/proof"
import { BigNumber, utils } from "ethers"
import getNextConfig from "next/config"
import { useRouter } from "next/router"
import { useCallback, useContext, useEffect, useState } from "react"
import Feedback from "../../contract-artifacts/Feedback.json"
import Stepper from "../components/Stepper"
import LogsContext from "../context/LogsContext"
import SemaphoreContext from "../context/SemaphoreContext"
import IconAddCircleFill from "../icons/IconAddCircleFill"
import IconRefreshLine from "../icons/IconRefreshLine"

import {QRCodeSVG} from 'qrcode.react';

const { publicRuntimeConfig: env } = getNextConfig()

export default function ProofsPage() {
    const router = useRouter()
    const { setLogs } = useContext(LogsContext)
    const { _users, _feedback, refreshFeedback, addFeedback } = useContext(SemaphoreContext)
    const [_loading, setLoading] = useBoolean()
    const [_identity, setIdentity] = useState<Identity>()

    const [ carryData, setCarryData ] = useState<any>({});

    useEffect(() => {
        const identityString = localStorage.getItem("identity")

        if (!identityString) {
            router.push("/")
            return
        }

        setIdentity(new Identity(identityString))
    }, [])

    useEffect(() => {
        if (_feedback.length > 0) {
            setLogs(`${_feedback.length} feedback retrieved from the group 🤙🏽`)
        }
    }, [_feedback])

    useEffect(() => {
        console.log(carryData);
    }, [carryData]);

    const sendFeedback = useCallback(async () => {
        if (!_identity) {
            return
        }

        // const feedback = prompt("Please enter your feedback:")
        const feedback = "dumb"

        if (feedback && _users) {
            setLoading.on()

            setLogs(`Posting your anonymous feedback...`)

            try {
                const group = new Group(env.GROUP_ID, 20, _users)

                const signal = BigNumber.from(utils.formatBytes32String(feedback)).toString()

                const { proof, merkleTreeRoot, nullifierHash } = await generateProof(
                    _identity,
                    group,
                    env.GROUP_ID,
                    signal
                )

                let response: any
                carryData.feedback = signal;
                carryData.proof = proof;
                carryData.merkleTreeRoot = merkleTreeRoot;
                carryData.nullifierHash = nullifierHash;
                setCarryData((carryData: any) => ({ ...carryData, feedback: signal, proof, merkleTreeRoot, nullifierHash }));

                setLogs(`Your carryData was generated 🎉`)
            } catch (error) {
                console.error(error)

                setLogs("Some error occurred, please try again!")
            } finally {
                setLoading.off()
            }
        }
    }, [_identity])

    return (
        <>
            <Heading as="h2" size="xl">
                Proofs
            </Heading>

            <Text pt="2" fontSize="md">
                Semaphore members can anonymously{" "}
                <Link href="https://semaphore.pse.dev/docs/guides/proofs" color="primary.500" isExternal>
                    prove
                </Link>{" "}
                that they are part of a group and that they are generating their own signals. Signals could be anonymous
                votes, leaks, reviews, or feedback.
            </Text>

            <Divider pt="5" borderColor="gray.500" />

            <HStack py="5" justify="space-between">
                <Text fontWeight="bold" fontSize="lg">
                    Feedback signals ({_feedback.length})
                </Text>
                <Button leftIcon={<IconRefreshLine />} variant="link" color="text.700" onClick={refreshFeedback}>
                    Refresh
                </Button>
            </HStack>

            <Box pb="5">
                <Button
                    w="100%"
                    fontWeight="bold"
                    justifyContent="left"
                    colorScheme="primary"
                    px="4"
                    onClick={sendFeedback}
                    isDisabled={_loading}
                    leftIcon={<IconAddCircleFill />}
                >
                    Send Feedback
                </Button>
            </Box>

            {_feedback.length > 0 && (
                <VStack spacing="3" align="left">
                    {_feedback.map((f, i) => (
                        <VStack key={i} p="3" borderWidth={1}>
                            <Text>{f}</Text>
                            <QRCodeSVG
                                value={`${carryData.feedback} ${carryData.proof} ${carryData.merkleTreeRoot} ${carryData.nullifierHash}`}
                                size={256}
                                bgColor={"#ffffff"}
                                fgColor={"#000000"}
                                level={"L"}
                                includeMargin={false}
                            />
                        </VStack>
                    ))}
                </VStack>
            )}

            <Divider pt="6" borderColor="gray" />

            <Stepper step={3} onPrevClick={() => router.push("/groups")} />
        </>
    )
}
