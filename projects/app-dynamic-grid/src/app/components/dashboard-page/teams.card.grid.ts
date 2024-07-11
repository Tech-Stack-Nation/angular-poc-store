import { GridColumnViewModel } from "lib-dynamic-grid";

export const TeamsCardGrid: GridColumnViewModel[] = [
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
  ]