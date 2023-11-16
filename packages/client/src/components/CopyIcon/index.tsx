import { copyText } from '@/utils';
import { message } from '@/utils/notice';
import { CopyFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';

interface IProps {
  title?: string;
  color?: string;
  value: string;
}

export default function CopyIcon({ title = '复制', value, color }: IProps) {
  return (
    <Tooltip title={title}>
      <CopyFilled
        style={{ cursor: 'pointer', color }}
        onClick={() => {
          copyText(value).then(() => {
            message.success('复制成功');
          });
        }}
      />
    </Tooltip>
  );
}
