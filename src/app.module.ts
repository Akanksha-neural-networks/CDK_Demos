import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CdkglobalModule } from './cdkglobal/cdkglobal.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CdkglobalModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
