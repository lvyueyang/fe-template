export const IgnoreAutoComplete = () => {
  return (
    <div style={{ width: 0, height: 0, position: 'absolute', overflow: 'hidden', opacity: 0 }}>
      <input type="text" name="username" />
      <input type="password" name="password" />
    </div>
  );
};
