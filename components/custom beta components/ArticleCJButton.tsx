import ButtonCJ from "../CJ-components/components-CJ/basic components/ButtonCJ";

const ProgrammeButton = ({ programme, locale }: any) => (
    locale !== "ar" && (
      <div className="pb-2">
        <ButtonCJ
          text={programme.name}
          href={`/programmes/${programme.slug}`}
          styleType="secondary"
        />
      </div>
    )
  );
export default ProgrammeButton;  