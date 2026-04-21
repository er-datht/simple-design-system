import { HeroActions } from "../../ui/sections/HeroAction";
import { Button } from "../../ui/primitives/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import "./not-found-page.css";

/**
 * NotFoundPage - 404 Error Page
 * Displayed when users navigate to a non-existent route
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <HeroActions
        className="not-found-hero"
        title="404"
        subtitle="Oops! The page you're looking for doesn't exist."
        buttons={
          <>
            <Button variant="primary" onClick={() => navigate(ROUTES.HOME)}>
              Go Home
            </Button>
            <Button
              variant="neutral"
              onClick={() => navigate(ROUTES.COMPONENTS)}
            >
              Browse Components
            </Button>
          </>
        }
      />
    </div>
  );
};
