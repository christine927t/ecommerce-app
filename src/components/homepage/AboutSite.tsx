import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type Props = {
    openAboutSite: boolean
    onClose: (value: boolean) => void
}

export default function AboutSite({ openAboutSite, onClose }: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    onClose(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        maxWidth="xs"
        open={openAboutSite}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <div className="text-[14px]">
            <p className="text-[16px] font-semibold text-center mb-2">This site is intended for portfolio purposes only and is a work in progress.</p>
            <p className="mb-1">I built this fullstack app using:</p>
            <div className="flex align-center gap-10">
              <div className="mb-1 w-50">
                  <p className="font-semibold">Frontend: </p>
                  <ul className="list-disc ps-5">
                    <li>React 19</li>
                    <li>Vite</li>
                    <li>React Router</li>
                    <li>TypeScript</li>
                    <li>Material UI</li>
                    <li>Tailwind CSS</li>
                    <li>TanStack React Query</li>
                    <li>Zustand</li>
                    <li>Vitest</li>
                    <li>React Testing Library</li>
                  </ul>
              </div>
              <div className="mb-1 w-50">
                <p className="font-semibold">Backend: </p>
                <ul className="list-disc ps-5 mb-2">
                  <li>NestJS</li>
                  <li>Prisma</li>
                  <li>PostgreSQL</li>
                  <li>Docker</li>
                </ul>
                <p className="font-semibold">Deployment:</p>
                <ul className="list-disc ps-5">
                  <li>AWS Amplify</li>
                  <li>GitHub Actions</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Got it!
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}