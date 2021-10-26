import { Form, Button } from "react-bootstrap";
import { useRef } from "react"; 

function CreateCardComp({ clickHandler }) {
const inputBizName = useRef();
const inputBizDescription = useRef();
const inputBizAddress = useRef();
const inputBizPhone = useRef();
const inputBizImage = useRef();



  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicBusinessName">
        <Form.Label>Business Name</Form.Label>
        <Form.Control type="text" ref={inputBizName} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
        <Form.Label>Business Description</Form.Label>
        <Form.Control type="text" ref={inputBizDescription}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
        <Form.Label>Business Address</Form.Label>
        <Form.Control type="text" ref={inputBizAddress}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
        <Form.Label>Business Phone</Form.Label>
        <Form.Control type="text" ref={inputBizPhone} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessImage">
        <Form.Label>Business Image</Form.Label>
        <Form.Control type="text" ref={inputBizImage} />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          clickHandler({
            bizName: inputBizName.current.value,
            bizDescription: inputBizDescription.current.value,
            bizAddress: inputBizAddress.current.value,
            bizPhone: inputBizPhone.current.value,
            bizImage: inputBizImage.current.value,
          });
        }}
      >
        Create Card
      </Button>
    </Form>
  );
}
export default CreateCardComp;
