const FullScreen = ({setFullScreen}) => {
  let handleFullScreen = () => {
    setFullScreen(false);
  };

  return (
    <div>
      <button>→</button>
      <button>←</button>
      <button onClick={() => handleFullScreen()}>ⓧ</button>
    </div>
  )
}
export default FullScreen;