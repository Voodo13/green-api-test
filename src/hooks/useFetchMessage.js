import {useState, useEffect} from 'react'

const useFetchMessage = (service) => {
    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [refetchIndex, setRefetchIndex] = useState(0)


    const refetchMessage = () => setRefetchIndex((refetchIndex) => refetchIndex + 1)

    const fetchMessage = async () => {
        setIsLoading(true)
        try {
            const data = await service.getLast()
            if (!data) {
                refetchMessage()
                return
            }
            const isDelete = await service.deleteLast(data.receiptId)
            if (isDelete) {
                // задержка после удаления из-за особенностей работы апи, иначе оповещения не успевают удалиться
                setTimeout(() => {
                    if (data.body.senderData?.chatId === service.chatId) {
                        setMessage(data.body)
                        setIsLoading(false)
                    }
                    refetchMessage()
                }, 200)
            }
        } catch (err) {
            console.log("ERROR ====", err)
            setHasError(true)
            setErrorMessage(err.message)
            refetchMessage()
        }
    }

    useEffect(() => {
        fetchMessage()
    }, [refetchIndex])

    return {message, isLoading, hasError, errorMessage, refetchMessage}
}

export default useFetchMessage
