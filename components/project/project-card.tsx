import { useProjectId } from "@/hooks/use-project-id";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { ProjectTaskProps } from "@/utils/types";
import { DraggableProvided } from "@hello-pangea/dnd";
import { Card } from "../ui/card";
import Link from "next/link";
import { ProjectAvatar } from "./project-avatar";

interface DataProps {
    ref: (element?: HTMLElement | null) => void;
    task: ProjectTaskProps;
    provided: DraggableProvided;
}
export const ProjectCard =({ref, provided, task}: DataProps) => {
    const workspaceId = useWorkspaceId();
    const projectId = useProjectId();

    return (
    <Card
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        {...provided.dragHandleProps}
        className="mb-2 p-3 bg-white dark:bg-gray-900 shadow-sm"
    >
        <Link href={`/workspaces/${workspaceId}/projects/${projectId}/${task.id}`}>
        <h3 className="font-medium">{task.title}</h3>
        </Link>
        {task.description && (
        <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
            {task.description}
        </p>
    )}

    <div className="flex items-center gap-2 justify-between mt-2">
        <div className="flex items-center gap-2">
            <ProjectAvatar name={task.project.name} className="!size-5"/>
        </div>

    </div>
    </Card>
    );
};