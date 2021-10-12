import multer from 'multer';

const MIME_TYPE_MAP = {
	'image/png': 'png',
	'image/jpeg': 'jpg ',
	'image/jpg': 'jpg',
}

export const StorageType = {
	DISK_STORAGE: 1
}

export class MulterConfigFactory {
	constructor(storageType) {
		this.config = null;
		if (storageType == StorageType.DISK_STORAGE) {
			this.config = multer.diskStorage({
				destination: (req, file, cb) => {
					const isValid = MIME_TYPE_MAP[file.mimetype];
					let error = new Error("Invalid mime type");
					if (isValid) {
						error = null;
					}
					cb(error, "contact-api-es6/media/images");
				},
				filename: (req, file, cb) => {
					const name = file.originalname.toLowerCase().split(' ').join('_');
					const ext = MIME_TYPE_MAP[file.mimetype];
					cb(null, `${name}_${Date.now()}.${ext}`)
				}
			});
		}
	}

	get CurrentConfig(){
		return this.config;
	}
}