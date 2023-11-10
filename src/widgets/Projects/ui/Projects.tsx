import cls from './projects.module.scss';
import {MdPreview} from 'react-icons/md';
import {BsCodeSlash} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ProjectTag from './ProjectTag';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
import { IProject, getProjects, getProjectsReq } from '../../../entities/Projects';
// import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { motion, useInView } from 'framer-motion';
export const Projects = () => {
    // const dispatch = useAppDispatch();
    const [tag,setTag] = useState<string>("all");
    const [t] = useTranslation(); 
    // const projects:IProject[] = useAppSelector(getProjects);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});
    const handleTag = (newTag:string) => setTag(newTag);
    const projects:IProject[] = [
        {
            id: "08fab9fb-0b2b-4a49-a652-1a238e121606",
            urlImg: "https://i.postimg.cc/2yvZGVS9/Screenshot-2023-10-17-092432.png",
            gitUrl: "https://github.com/AmgadAlakhadher/Template-html-css-js-jquery-",
            previewUrl: "https://amgadalakhadher.github.io/Template-html-css-js-jquery-/",
            title: "fitnes template",
            desc: "i create this site maybe 2 years ago when i was practise my skills(html,css,js,jquery)",
            tags: ["front-end","all"],
        },
        {
            id: "4c2e9ba2-f745-4299-941d-cab5f29460bb",
            urlImg: "https://i.postimg.cc/C5MN6G9r/Screenshot-2023-10-17-091940.png",
            gitUrl: "https://github.com/AmgadAlakhadher/template5",
            previewUrl: "https://amgadalakhadher.github.io/template5/",
            title: "profile template",
            desc: "i create this site maybe 2 years ago when i was practise my skills(html,css,media query)",
            tags:   ["front-end","all"]
        },
        {
            id: "7a201e4d-0c01-46ec-9e1a-eebf25c45d34",
            urlImg: "https://i.postimg.cc/1zprm7QY/Screenshot-2023-10-17-092224.png",
            gitUrl: "https://github.com/AmgadAlakhadher/Template-Bootstrap",
            previewUrl: "https://amgadalakhadher.github.io/Template-Bootstrap/",
            title: "template",
            desc: "i create this site maybe 2 years ago when i was practise my skills(html,css,bootstrap)",
            tags: ["front-end","all"]
        },
        {
            id: "8733356d-9b1c-49a4-87a0-b700de427371",
            urlImg: "https://i.postimg.cc/LsWtVRD9/Screenshot-2023-10-18-113832.png",
            gitUrl: "https://github.com/AmgadAlakhadher/cv",
            previewUrl: "/",
            title: "CV site",
            desc: "i created this full-stack website when i started to think about my CV",
            tags: ["full-stack","all"]
        },
    ];
    const projectVariants = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
        },
    }
    const filteredProjects = projects.filter((project:IProject) => {
        if(project.tags && project.tags.includes(tag)) return project;
    });
    // useEffect(()=> {
    //     dispatch(getProjectsReq());
    // },[])
  return (
    <section className={cls.projects} id='projects'>
        <div className="myContainer">
            <h3 className={cls.projects__title}>
                {t('menu_projects')}
            </h3>
            <div className={cls.projects__btns}>
                <ProjectTag 
                    onClick={handleTag}
                    name='all'
                    isSelected={tag === "all"}
                />
                <ProjectTag 
                    onClick={handleTag}
                    name='front-end'
                    isSelected={tag === "front-end"}
                />
                <ProjectTag 
                    onClick={handleTag}
                    name='full-stack'
                    isSelected={tag === "full-stack"}
                />
            </div>
            <div className={`${cls.projects__items} row`} ref={ref}>
                {
                    filteredProjects.length ? filteredProjects.map((item:IProject, index) => {
                        return (
                            <motion.div 
                                key={item.id} className={`${cls.projects__item} col-lg-4 col-md-6 col-sm-12`}
                                variants={projectVariants}
                                initial="initial"
                                animate={isInView ? "animate" : "initial"}
                                transition={{ duration: .3, delay: index * .4}}
                                >
                                <div className={cls.projects__item__content}>
                                    <div className={cls.projects__item__content__box}>
                                        <div className={cls.projects__item__content__box_img} style={{backgroundImage: `url(${item.urlImg})`}}></div>
                                        <div className={cls.projects__item__content__box_overlay}>
                                            <div className={cls.projects__item__content__box_overlay_icons}>
                                                <Link to={item.gitUrl} target='_blank'><BsCodeSlash className={cls.icon} /></Link>
                                                <Link to={item.previewUrl} target='_blank'><MdPreview  className={cls.icon} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cls.projects__item__content__info}>
                                        <h2 className={cls.projects__item__content__info_title}>     {item.title}
                                        </h2>
                                        <p className={cls.projects__item__content__info__desc}>{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }) : <p>no projects</p>
                }
            </div>
        </div>
    </section>
  )
}
