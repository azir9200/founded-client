/* eslint-disable padding-line-between-statements */
import { Button } from "@nextui-org/button";
import FXForm from "../form/FXForm";
import FXInput from "../form/FXInput";
import FXTextarea from "../form/FXTextArea";
import FXModal from "./FXModal";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddClaimRequest } from "@/src/hooks/claimRequest.hook";

interface IProps {
  id: string;
  questions: string[];
}

export default function ClaimRequestModal({ id, questions }: IProps) {
  const { mutate: handleClaimRequest, isPending } = useAddClaimRequest();

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    const claimRequestData = {
      item: id,
      description: data.description,
      answers: Object.keys(data)
        .filter((formElement) => formElement.startsWith("answer"))
        .map((answer) => data[answer]),
    };
    console.log("data azir", claimRequestData);

    // console.log(
    //   Object.keys(data)
    //     .filter((formElement) => formElement.startsWith("Answer"))
    //     .map((Answer) => data[Answer]) );
    // const some = "description";
    // console.log(data[some]);

    handleClaimRequest(claimRequestData);
  };
  return (
    <FXModal
      buttonClassName="flex-1"
      buttonText="Claim Request"
      title="Claim Request"
    >
      <FXForm onSubmit={onSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <FXInput
              label={`answer - ${index + 1}`}
              name={`answer - ${index + 1}`}
            />
          </div>
        ))}
        <FXTextarea label="Description" name="description" />
        <Button className="w-full flex-1 my-2" size="lg" type="submit">
          {isPending ? "Sending...." : "Send"}
        </Button>
      </FXForm>
    </FXModal>
  );
}
