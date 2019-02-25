import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegularPipePipe } from './regular-pipe.pipe';
import { MemoPipePipe } from './memo-pipe.pipe';

@NgModule({
  declarations: [
      RegularPipePipe,
      MemoPipePipe,
  ],
  exports: [
      RegularPipePipe,
      MemoPipePipe,
  ],
  imports: [CommonModule]
})
export class SharedModule {}
