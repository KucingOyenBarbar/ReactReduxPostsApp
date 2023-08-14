/* eslint-disable @typescript-eslint/no-unused-vars */
type PostButtonProps = {
  showInputForm: boolean;
  setShowInputForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PostButton({
  showInputForm,
  setShowInputForm,
}: PostButtonProps) {
  return (
    <div className="row justify-content-center g-2">
      <div className="col-lg-7">
        <div className="d-flex justify-content-end g-2">
          <button
            onClick={() =>
              setTimeout(() => {
                setShowInputForm(true);
              }, 300)
            }
            type="button"
            className="btn btn-md rounded text-center text-white fst-normal fs-5"
            style={{
              backgroundColor: "#4c0bce",
            }}
          >
            Buat Postingan Baru
          </button>
        </div>
      </div>
    </div>
  );
}
