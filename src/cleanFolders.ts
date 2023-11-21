import fs from 'fs';

export default function cleanFolders() {
  let directory = 'generated_files/dtos/';
  let files = fs.readdirSync(directory);
  files.forEach(file => {
    fs.unlinkSync(directory + file);
  });

  directory = 'generated_files/infra/http/controllers/';
  files = fs.readdirSync(directory);
  files.forEach(file => {
    fs.unlinkSync(directory + file);
  });

  directory = 'generated_files/infra/http/routes/';
  files = fs.readdirSync(directory);
  files.forEach(file => {
    fs.unlinkSync(directory + file);
  });

  directory = 'generated_files/infra/typeorm/entities/';
  files = fs.readdirSync(directory);
  files.forEach(file => {
    fs.unlinkSync(directory + file);
  });

  directory = 'generated_files/infra/typeorm/repositories/';
  files = fs.readdirSync(directory);
  files.forEach(file => {
    fs.unlinkSync(directory + file);
  });

  directory = 'generated_files/repositories/';
  files = fs.readdirSync(directory);
  files.forEach(file => {
    fs.unlinkSync(directory + file);
  });

  directory = 'generated_files/services/';
  files = fs.readdirSync(directory);
  files.forEach(file => {
    fs.rmSync(directory + file, { recursive: true });
  });
}
