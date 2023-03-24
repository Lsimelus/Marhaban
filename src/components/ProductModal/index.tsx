import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from "@mui/icons-material/Close";
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';

interface ProductModalProps {
  data: any,
  setModal: Function,
  getModal: boolean,
  img: any
}

export const ProductModal = (props: ProductModalProps) => {
  const { img, data, setModal, getModal } = props;

  function handleModalClose() {
    setModal(false);
  }
  return (
    <>
      <Modal open={getModal} onClose={handleModalClose}>
        <Box style={{
          width: "700px",
          minHeight: "400px",
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '5px',
          backgroundColor: "white"
        }}>
          <Box style={{ textAlign: "right" }}>
            <IconButton>

            
            <CloseIcon
              sx={{
                transition: "transform .7s ease-in-out",
                color: "red",
                cursor: "pointer",
                ':hover': {
                  transform: "rotate(360deg)"
                },

              }}
              onClick={() => { handleModalClose() }} />
              </IconButton>
          </Box>
          <Grid container >
            <Grid item xs={8} p={3}>

              <img
                style={{
                  flex: 1,
                  maxWidth: "100%",
                  borderRadius: "5px",
                  marginBottom: "0px"
                }}
                src={img}
              ></img>

            </Grid>
            <Grid item xs={4}>
              <Box
                justifyContent={"space-between"}
              >

                  <b>
                    What is included?
                  </b>

              </Box>
              <ul style={{paddingLeft: "15px"}}>
              {Object.keys(data.items).map(function(obj:string){
                return(<li style={{listStyleType: "square"
                 }}><a  style={{cursor: "pointer",
                 color: "blue",
               textDecoration: "underline"}} href={data.items[obj]}>{obj}</a></li>)
              })}
              </ul>
       </Grid>


          </Grid>
          <Grid item xs={12}  p={3}>
          <p><b>Who is this for: </b> {data.desc}</p>

          </Grid>


          

        </Box>
      </Modal>
    </>
  )
}

export default ProductModal;