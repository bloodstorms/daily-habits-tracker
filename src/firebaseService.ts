import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebase";

interface SleepRecord {
  date: string;
}

const addSleepRecord = async (data: SleepRecord): Promise<void> => {
  try {
    const sleepRecordsCollection = collection(firestore, "sleepRecords");
    await addDoc(sleepRecordsCollection, data);
    console.log("Sleep record added successfully.");
  } catch (error) {
    console.error("Error adding sleep record: ", error);
  }
};

export { addSleepRecord };
