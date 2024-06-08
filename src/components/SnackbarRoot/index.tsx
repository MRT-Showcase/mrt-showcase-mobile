import { Snackbar } from "react-native-paper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store";
import { removeMessage } from "../../store/slices/snackbar";

const SnackbarRoot = () => {
  const dispatch = useDispatch();
  const snackbarMessage = useSelector(
    (state: RootState) => state.snackbar.message
  );

  return (
    <Snackbar
      visible={snackbarMessage != undefined}
      onDismiss={() => dispatch(removeMessage())}
      duration={5000}
    >
      {snackbarMessage}
    </Snackbar>
  );
};

export default SnackbarRoot;
