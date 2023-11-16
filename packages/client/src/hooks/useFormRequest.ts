import { message } from '@/utils/notice';
import { useRequest } from 'ahooks';
import { Form } from 'antd';

interface Options<FormValue> {
  submit?: (values: FormValue) => Promise<any>;
  getValues: () => Promise<FormValue>;
}

export function useFormRequest<FormValue>(options: Options<FormValue>) {
  const [form] = Form.useForm<FormValue>();

  const { run: getValuesHandler, loading: getValuesLoading } = useRequest(
    async () => {
      await options.getValues().then((values: any) => {
        form.setFieldsValue({
          ...values,
        });
      });
    },
    {
      manual: true,
    },
  );

  const { run: submitHandler, loading: submitLoading } = useRequest(
    async () => {
      await form.validateFields();
      const values = form.getFieldsValue();
      await options?.submit?.(values);
      message.success(`提交成功`);
    },
    {
      manual: true,
    },
  );

  return {
    submitLoading,
    getValuesLoading,
    form,
    submitHandler,
    getValuesHandler,
  };
}
