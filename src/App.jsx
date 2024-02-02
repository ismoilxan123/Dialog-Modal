import { useEffect, useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);

  function modalClick() {
    setOpen(!open);
  }
  function clickKey(e) {
    if (e == "Escape") {
      setOpen(false);
    } else if (e == "M") {
      setOpen(true);
    } else if (e == "m") {
      setOpen(true);
    }
  }
  useEffect(() => {
    document.body.addEventListener("keyup", (e) => clickKey(e.key));
  }, []);
  return (
    <>
      <dialog
        open={open}
        className="rounded-lg mt-24  p-8 w-[500px] bg-[#14191E]"
      >
        <div className="flex justify-between mb-5 ">
          <h1 className="font-bold text-lg">Hello</h1>
          <button
            onClick={() => setOpen(false)}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </div>
        <div>
          <p className="py-4">
            Press{" "}
            <kbd onClick={() => setOpen(false)} className="kbd cursor-pointer">
              ESC
            </kbd>{" "}
            key or click on ✕ button to close
          </p>
        </div>
      </dialog>
      {open ? (
        ""
      ) : (
        <div className="text-center">
          <div className="text-center mt-28 tooltip" data-tip="press: M">
            <button onClick={modalClick} className="btn ">
              {open ? "Close" : "Open"} modal
            </button>
          </div>
        </div>
      )}
      {/* <div className="tooltip" data-tip="hello">
        <button className="btn">Hover me</button>
      </div> */}
    </>
  );
};

export default App;
