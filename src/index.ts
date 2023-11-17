import buildController from 'builders/controller';
import buildDto from 'builders/dto';
import buildEntity from 'builders/entity';
import buildIRepository from 'builders/irepository';
import buildMigration from 'builders/migration';
import buildRepository from 'builders/repository';
import buildRoute from 'builders/route';
import buildServiceCreate from 'builders/service_create';
import buildServiceDelete from 'builders/service_delete';
import buildServiceGet from 'builders/service_get';
import buildServiceList from 'builders/service_list';
import buildServiceUpdate from 'builders/service_update';
import buildSwagger from 'builders/swagger';

buildEntity();
buildIRepository();
buildDto();
buildRepository();

buildServiceCreate();
buildServiceDelete();
buildServiceGet();
buildServiceList();
buildServiceUpdate();

buildController();
buildRoute();

buildMigration();
buildSwagger();
