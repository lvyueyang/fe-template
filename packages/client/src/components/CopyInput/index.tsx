import { copyText } from '@/utils';
import { Button, Input, Space, message } from 'antd';
import { type InputProps } from 'antd/lib/input';

export default function CopyInput({ value, children, ...props }: InputProps) {
  return (
    <Space.Compact style={{ width: '100%' }}>
      <Input readOnly {...props} value={value}></Input>
      <Button
        type="primary"
        onClick={() => {
          copyText(value as string).then(() => {
            message.success('复制成功');
          });
        }}
      >
        复制
      </Button>
      {children}
    </Space.Compact>
  );
}
