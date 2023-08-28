import { FC } from "react";
import { useLabels } from "../../hooks/useLabels";
import { LoadingIcon } from "../../shared/components/LoadingIcon";

interface Props {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {
  const { labelsQuery } = useLabels();

  /**
   * isLoading => se ejecuta en la primera carga cuando no tenemos ninguna data
   * isFetching => se ejecuta cada vez que se vuelve a requerir una nueva data
   */
  if (labelsQuery.isLoading) return <LoadingIcon />;

  return (
    <div>
      {labelsQuery.data?.map((label) => (
        <span
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabels.includes(label.name) ? "label-active" : ""
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          key={label.id}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
