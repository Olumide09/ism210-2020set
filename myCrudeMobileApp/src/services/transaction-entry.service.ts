import { getRepository, Repository } from "typeorm";
import { TransactionEntry } from "../entities/transaction-entry.entity";

export const getTransactionEntries = async (setTransactionEntries:
    React.Dispatch<React.SetStateAction<TransactionEntry[]>>) => {
    try {
        const transactionEntryRepository: Repository<TransactionEntry> = getRepository(TransactionEntry);
        let transactionEntries = await transactionEntryRepository.find();
        //Below if should not be here. It is just to load some fictitious data for quick connectivity test
        if (transactionEntries.length === 0) {
            const newTransactionEntry = new TransactionEntry();
            newTransactionEntry.description = 'Just a sample entry';
            newTransactionEntry.amount = 1000;
            await transactionEntryRepository.save(newTransactionEntry);
            transactionEntries = await transactionEntryRepository.find();
        }
        setTransactionEntries(transactionEntries);
    } catch (error) {
        console.log(error);
    }
};