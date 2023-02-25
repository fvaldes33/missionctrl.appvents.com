import { classNames } from "~/utils/classNames";

type PageProps = React.ComponentPropsWithoutRef<"div">;

export function Page({ children, className = "", ...props }: PageProps) {
  return (
    <div className={classNames("overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}
