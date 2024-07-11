import { GridColumnViewModel } from "lib-dynamic-grid";

export const TeamGrid: GridColumnViewModel[] = [
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
        headerName: 'Number of Users',
        dataKey: 'numberOfUsers',
        visible: true,
    },
    {
        headerName: 'Active',
        dataKey: 'isActive',
        visible: true,
    },
  ]