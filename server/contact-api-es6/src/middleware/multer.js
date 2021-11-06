import multer from 'multer';

const MIME_TYPE_MAP = {
	'image/png': 'png',
	'image/jpeg': 'jpg ',
	'image/jpg': 'jpg',
}

export class MulterConfig {
	static Init(storageType) {
		let currentStorage = null;
		if (storageType == StorageType.DISK_STORAGE) {
			const localFileStorage = multer.diskStorage({
				destination: (req, file, cb) => {
					const isValid = MIME_TYPE_MAP[file.mimetype];
					let error = new Error("Invalid mime type");
					if (isValid) {
						error = null;
					}
					cb(error, "media/images");
				},
				filename: (req, file, cb) => {
					const name = file?.originalname?.toLowerCase().split(' ').join('_');
					const ext = MIME_TYPE_MAP[file?.mimetype];
					let finalName = `${Date.now()}_${name}`;
					if(!name.includes('.')){
						finalName = `${Date.now()}_${name}.${ext}`;
					}
					cb(null, finalName)
				}
			});
			currentStorage= localFileStorage;
		}
		return currentStorage;
	}
}

export const StorageType = {
	DISK_STORAGE: 1
}