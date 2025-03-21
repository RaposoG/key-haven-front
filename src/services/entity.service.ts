import { AnyObject } from "@/core/types/any-object.type";
import { ENTITY_METADATA_KEY } from "@/core/types/entity.metadata.key";
import { useApi } from "@/hooks/http/useApi";
import debug from "debug";

/**
 * Serviço genérico para fazer requisição de entidades
 * @example
 * const passwordService = new EntityService(Password);
 * const passwords = await passwordService.getAll();
 */
export class EntityService<T> {
  private axiosInstance = useApi();
  private log = debug("app:entity-service");

  private declare endpoint: string;

  constructor(private entity: new () => T) {
    this.buildUrl();
  }

  async get(): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get(this.endpoint);
      this.log("Fetching data from %s", this.endpoint);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<T[]> {
    try {
      const { data } = await this.axiosInstance.get(this.endpoint);
      this.log("Fetching data from %s", this.endpoint);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getById(id: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get(`${this.endpoint}/${id}`);
      this.log("Fetching data from %s", this.endpoint);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async create(payload: AnyObject): Promise<T> {
    try {
      const { data } = await this.axiosInstance.post(this.endpoint, payload);
      this.log("Creating data on %s", this.endpoint);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, payload: AnyObject): Promise<T> {
    try {
      const { data } = await this.axiosInstance.patch(
        `${this.endpoint}/${id}`,
        payload
      );
      this.log("Updating data on %s", this.endpoint);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.delete(
        `${this.endpoint}/${id}`
      );
      this.log("Deleting data from %s", this.endpoint);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get(`${this.endpoint}/${id}`);
      this.log("Fetching data from %s", this.endpoint);
      return data;
    } catch (error) {
      throw error;
    }
  }

  private buildUrl(): string {
    const endpoint = Reflect.getMetadata(ENTITY_METADATA_KEY, this.entity);
    if (!endpoint) {
      throw new Error(
        `Entity class ${
          (this.entity as any).name
        } is missing an @Endpoint decorator`
      );
    }
    this.endpoint = endpoint;
    return this.endpoint;
  }
}
