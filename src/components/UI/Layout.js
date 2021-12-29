const Layout = ({ sidePanel, map }) => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <div
        style={{
          width: '30%',
          margin: 10,
          height: 'calc(100vh - 20px)',
          overflowX: 'auto',
        }}
      >
        {sidePanel}
      </div>
      <div style={{ width: '70%' }}>{map}</div>
    </div>
  );
};

export default Layout;
