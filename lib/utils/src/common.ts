/** 复制文字 */
export const copyText = async (text: string) => {
  return await new Promise((resolve, reject) => {
    try {
      if (
        location.href.startsWith('https://') &&
        typeof window.navigator.clipboard?.writeText === 'function'
      ) {
        window.navigator.clipboard.writeText(text).then(resolve).catch(reject);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.style.position = 'absolute';
        textarea.style.width = '10px';
        textarea.style.height = '10px';
        textarea.style.left = '-9999px';
        textarea.style.opacity = '0';
        textarea.select();
        document.execCommand('Copy');
        setTimeout(() => {
          textarea.remove();
        });
        resolve(true);
      }
    } catch (e) {
      reject(e);
    }
  });
};

/** 下载文件 */
export function downloadFile(url: string, name?: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = name ?? url.split('/').reverse()[0];
  a.target = '_blank';
  a.click();
  a.remove();
}

/** 判断是否为json */
export function isJson(value: string) {
  try {
    const obj = JSON.parse(value);
    if (typeof obj === 'object' && !!obj) {
      return obj;
    }
    return false;
  } catch (e) {
    return false;
  }
}

/** 合并 className */
export function cls(...classList: Array<string | undefined>) {
  return classList.filter((i) => !!i).join(' ');
}
