const Course = lazy(() => import("../../app/components/Courses/index"));
const course: IRoute[] = [
  {
    key: "course",
    path: "course",
    component: <Course />,
  },
];
