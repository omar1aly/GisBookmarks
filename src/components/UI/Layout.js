const Layout = ({ sidePanel, map, user }) => {
  console.log(user);
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex' }}>
      <div
        style={{
          width: '25%',
          margin: 10,
          height: 'calc(100vh - 20px)',
          overflowX: 'auto',
        }}
      >
        {sidePanel}
      </div>
      <div style={{ width: '75%' }}>{map}</div>
    </div>
  );
};

export default Layout;
