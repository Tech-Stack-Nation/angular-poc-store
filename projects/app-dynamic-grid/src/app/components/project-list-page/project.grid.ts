import { GridColumnViewModel } from "lib-dynamic-grid";

export const ProjectGrid: GridColumnViewModel[] = [
    {
        headerName: '',
        dataKey: 'id',
        visible: false,
    },
    {
        headerName: 'Title',
        dataKey: 'title',
        visible: true,
    },
    {
        headerName: 'Created Date',
        dataKey: 'createdDate',
        visible: true,
    },
    {
        headerName: 'End Date',
        dataKey: 'endDate',
        visible: true,
    },
    {
        headerName: 'Budget',
        dataKey: 'budget',
        visible: false,
    },
    {
        headerName: 'Active',
        dataKey: 'isActive',
        visible: true,
    },
    
  ]