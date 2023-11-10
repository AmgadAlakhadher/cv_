import { memo } from 'react';
import cls from './projects.module.scss';
import { t } from 'i18next';

interface IProjectTag {
  name:string;
  onClick: (tag:string)=> void
  isSelected: boolean
}
const ProjectTag = ({name,onClick,isSelected}:IProjectTag) => {
  return (
    <button 
      className={`${cls.projects__btns_btn} ${isSelected && cls.projects__btns_btn_active} pointer`}
      onClick={()=>onClick(name)}
      >
      {
        name === "all"? t("projects_btn_all") :
          name === "front-end"? t("projects_btn_frontend") :
            t("projects_btn_fullstack")
      }
    </button>
  )
}

export default memo(ProjectTag);