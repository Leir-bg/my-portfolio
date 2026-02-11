import { forwardRef } from 'react'
import type { RefObject } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks/StoreHook'
import { closeProjects } from '@/store/projectReducer'

interface ProjectsSectionProps {
    projectContainerRef: RefObject<HTMLDivElement | null>
}

const ProjectsSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(({ projectContainerRef }, ref) => {
    const isOpen = useAppSelector((state) => state.project.isOpen)
    const dispatch = useAppDispatch()

    const handleClose = () => {
        dispatch(closeProjects())
    }

    return (
        <div className={`projects_section ${isOpen ? 'active' : ''}`} ref={ref}>
            <span className="close" onClick={handleClose}></span>
            <div className="project" ref={projectContainerRef}></div>
        </div>
    )
})

export default ProjectsSection
