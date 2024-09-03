import ModalProvider from "context/modal/ModalProvider";
import ModalRenderer from "components/common/ModalRenderer";
import ContactContainer from "components/ContactContainer";

function App() {
  return (
    <ModalProvider>
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <h1 className="text-[40px] font-bold mb-4 inline-block">
            연락처 리스트
          </h1>
        </div>
        <ContactContainer />
      </div>
      <ModalRenderer />
    </ModalProvider>
  );
}

export default App;
