import {useState} from 'react';
import {ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import {storage} from '../config/firebase';
import { v4 as uuidv4 } from 'uuid';

const useFirestorage = () => {

    const [isUploading, setIsUploading] = useState(false);

    const uploadImages = async (images, Id) => {

        try {
            setIsUploading(true);
            let fileNames = [];
            const promiseImages = images.map(img => {
                const fileName = uuidv4();
                fileNames.push(fileName);
                const imageRef = ref(storage, `rooms/${Id}/${fileName}`);
                return uploadBytes(imageRef, img.file);
            });

            const snapshots = await Promise.all(promiseImages);

            const promiseSnapshots = snapshots.map(s => getDownloadURL(s.ref));

            let imageUrls = await Promise.all(promiseSnapshots);

            imageUrls = imageUrls.map((url, index) => ({url, fileName: fileNames[index]}));

            setIsUploading(false);
            return imageUrls;

        } catch (err) {
            setIsUploading(false);
            console.log(err);
        }
    }

    return {
        isUploading,
        uploadImages,
    }

}

export default useFirestorage;