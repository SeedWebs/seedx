'use client';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Modal Dialog</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
        </DialogHeader>
        <div className='py-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
          nisi, blandit sit amet justo in, euismod viverra augue. Cras et libero
          enim. Nullam tristique at lorem quis pellentesque. Etiam imperdiet
          lacus vehicula ipsum aliquet, eu elementum mauris interdum.
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
