import { CompatibilityType, IConfigurationResult, ISchemaResult } from './models';
import { ISchemaRequest } from './models/ISchemaRequest';

export interface ISchemaRegistryHttpClient {
  getSchemaById(id: number): Promise<ISchemaRequest>
  getSubjects(): Promise<string[]>;
  getSubjectVersions(subjectName: string): Promise<number[]>; // List of subject versions
  deleteSubject(subjectName: string): Promise<number[]>;  // List of deleted subject versions
  deleteSchemaBySubjectVersion(subjectName: string, versionIdentifier: number): Promise<number> // Version ID of deleted schema
  getSchemaInfoBySubjectVersion(subjectName: string, versionIdentifier: number): Promise<ISchemaResult>;
  getLatestSchemaInfoBySubject(subjectName: string): Promise<ISchemaResult>;
  getSchemaBySubjectVersion(subjectName: string, versionIdentifier: number | string): Promise<object>;
  getLatestSchemaBySubject(subjectName: string): Promise<object>;
  createSchema(subjectName: string, schema: ISchemaRequest): Promise<ISchemaResult>;
  schemaExists(subjectName: string, schema: ISchemaRequest): Promise<ISchemaResult>;
  isCompatible(targetSubjectName: string, targetSubjectVersion: string, sourceSchema: ISchemaRequest): Promise<boolean>
  isCompatibleAgainstLatest(targetSubjectName: string, sourceSchema: ISchemaRequest): Promise<boolean>
  setGlobalCompatiblity(compatiblity: CompatibilityType): Promise<IConfigurationResult>;
  getConfiguration(): Promise<IConfigurationResult>;
  setSubjectCompatibility(subjectName: string, compatiblity: CompatibilityType): Promise<IConfigurationResult>
  getSubjectConfiguration(subjectName: string): Promise<IConfigurationResult>;
}
