import axios from "axios";

const useCloudinaryApi = () => {

    const handleUploadFile = async(file)=>{
        
        const formDataCLD = new FormData()
        formDataCLD.append('file', file)
        formDataCLD.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET_CLD)

        const {data} = await axios.post(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME_CLD}/image/upload`, formDataCLD)

        const fileUrl = data.secure_url

        return fileUrl
        
    }
    return handleUploadFile
};

export default useCloudinaryApi;