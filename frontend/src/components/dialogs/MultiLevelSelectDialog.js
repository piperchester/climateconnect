import React from "react";
import PropTypes from "prop-types";
import GenericDialog from "./GenericDialog";
import MultiLevelSelector from "../shareProject/MultiLevelSelector";
import skillsToChooseFrom from "../../../public/data/skills.json";
import categoriesToChooseFrom from "../../../public/data/project_categories.json";

export default function MultiLevelSelectDialog({ items, onClose, open, type, maxSelections }) {
  const [selectedItems, setSelectedItems] = React.useState(items ? items : []);

  const handleClose = () => {
    setSelectedItems(items ? items : []);
    onClose();
  };

  const applySkills = () => {
    onClose(selectedItems);
  };

  const itemNamePlural = type;

  const itemsToChooseFrom =
    type === "skills"
      ? skillsToChooseFrom
      : type === "project categories" && categoriesToChooseFrom;

  return (
    <GenericDialog
      onClose={handleClose}
      open={open}
      title={"Add " + itemNamePlural}
      useApplyButton={true}
      onApply={applySkills}
      applyText={"Add"}
      topBarFixed
    >
      <MultiLevelSelector
        itemsToSelectFrom={itemsToChooseFrom}
        maxSelections={maxSelections ? maxSelections : 10}
        itemNamePlural={itemNamePlural}
        selected={selectedItems}
        setSelected={setSelectedItems}
        isInPopup
      />
    </GenericDialog>
  );
}

MultiLevelSelectDialog.propTypes = {
  open: PropTypes.bool.isRequired
};