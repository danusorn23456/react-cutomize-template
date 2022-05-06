import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';

export interface UserAvatarProps {
	defaultValue?: string,
	value?: string,
	onChange?: (imageURL: string) => any
}

function getBase64(img: any, callback: any) {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result));
	reader.readAsDataURL(img);
}

const StyledUpload = styled(Upload)(({ theme }) => ({
	".ant-upload-select-picture-card": {
		borderRadius: "1000px !important",
		overflow: "hidden"
	},
	"img": {
		objectFit: "cover"
	}
}))

export default function UserAvatar({ onChange, defaultValue, value, ...props }: UserAvatarProps) {

	const [imageUrl, setImageUrl] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	const beforeUpload = useCallback((file: File)=> {
		
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!');
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			message.error('Image must smaller than 2MB!');
		}
		setIsLoading(true)

		getBase64(file, (imageUrl: string) => {
			setImageUrl(imageUrl)
			onChange?.(imageUrl)
			setIsLoading(false)
		});

		return false;
	},[onChange])

	useEffect(()=>{
		setImageUrl(value || "")
	},[value])

	const uploadButton = (
		<div>
			{isLoading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	return (
		<StyledUpload
			{...props}
			name="avatar"
			listType="picture-card"
			beforeUpload={beforeUpload}
			showUploadList={false}
		>
			{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
		</StyledUpload>
	)
}