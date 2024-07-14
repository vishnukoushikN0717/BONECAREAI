import React, { useState } from 'react';

function AIModelIntegration() {
    const [imageUrl, setImageUrl] = useState(null);

    const uploadImageToImgBB = async (imageFile) => {
        const url = `https://api.imgbb.com/1/upload?key=009724a832c91c80defbd4f46677e3fc`;
        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                return { url: data.data.url };
            } else {
                console.error("Failed to upload image to ImgBB:", response.statusText);
                return { url: null };
            }
        } catch (error) {
            console.error("Error uploading image to ImgBB:", error);
            return { url: null };
        }
    };

    const handleImageUpload = async (event) => {
        const imageFile = event.target.files[0];
        if (imageFile) {
            const result = await uploadImageToImgBB(imageFile);
            if (result.url) {
                setImageUrl(result.url);
            }
        }

    };
    console.log(imageUrl);

    return (
        <div className="ai-model">
            <h2>AI Model for Bone Fracture Diagnosis</h2>
            <p>Our AI model, BoneFractureDetect, helps in diagnosing bone fractures with high accuracy. Insert your model here.</p>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageUrl && (
                <div>
                    <p>Uploaded Image:</p>
                    <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
}

export default AIModelIntegration;
