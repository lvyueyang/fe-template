import { uploadFile } from '@/services';
import { type ValidateRule, getImageSize, validateSize } from '@/utils';
import { message } from '@/utils/notice';
import { PlusOutlined } from '@ant-design/icons';
import { Upload, type UploadProps } from 'antd';
interface UploadImageProps {
  value?: string;
  sizeRule?: ValidateRule;
  customValidateSize?: (size: { width: number; height: number }) => boolean;
  onChange?: (value: string) => void;
}
export default function UploadImage({
  value,
  sizeRule,
  customValidateSize,
  onChange,
}: UploadImageProps) {
  const changeHandler: UploadProps<string>['onChange'] = (e) => {
    if (e.file.response) {
      onChange?.(e.file.response);
    }
  };
  return (
    <Upload<string>
      onChange={changeHandler}
      listType="picture-card"
      showUploadList={false}
      accept="image/*"
      customRequest={({ file, onError, onProgress, onSuccess }) => {
        (async () => {
          try {
            const size = await getImageSize(file as File);
            if (sizeRule) {
              const err = validateSize(size, sizeRule);
              if (err) {
                message.error(err);
                return await Promise.reject(err);
              }
            }
            if (typeof customValidateSize === 'function') {
              const err = customValidateSize(size);
              if (err) {
                return await Promise.reject(err);
              }
            }
            const res = await uploadFile(file as File, { onUploadProgress: onProgress });
            onSuccess?.(res.data.data);
            message.success('上传成功');
          } catch (e: any) {
            onError?.(e);
          }
        })();

        return {
          abort() {
            console.log('abort');
          },
        };
      }}
    >
      {value ? (
        <img style={{ width: '100%', height: '100%', display: 'block' }} src={`${value}`} />
      ) : (
        <div>
          <PlusOutlined style={{ fontSize: 30, color: '#666' }} />
        </div>
      )}
    </Upload>
  );
}
