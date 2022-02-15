import { BadGatewayException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IBaseService } from './IBase.services';
import { BaseEntity } from './base.entity';

@Injectable()
export class BaseService<T extends BaseEntity> implements IBaseService<T> {
    constructor(
        private readonly genericRepository: Repository<T>
    ) {}

    async create(entity: any): Promise<number>{
        try {
            return await new Promise<number> ((resolve, reject) => {
                this.genericRepository.save(entity)
                    .then(created => resolve(created.id))
                    .catch(err => reject(err))
            })
        }
        catch(error) {
            throw new BadGatewayException(error);
        }
    }

    async getAll(): Promise<T[]> {
        try {
          return await <Promise<T[]>>this.genericRepository.find();  
        }
        catch (error) {
            throw new BadGatewayException(error);
        }
    }

    async get(id: number): Promise<T> {
       return await <Promise<T>>this.genericRepository.findOne({where: {id: id}});
    }

    async delete(id: number) {
        return await this.genericRepository.delete(id);
    }
    async update(entity: any): Promise<any> {
        try {
            return await new Promise<any> ((resolve, reject) => {
                this.genericRepository.findOne({where : { id: entity.id}})
                .then(responseGet => {
                    try {
                        if (responseGet == null) reject('Not existing')
                        let retrievedEntity: any = responseGet as any
                        this.genericRepository.save(retrievedEntity)
                        .then(response => resolve(response))
                        .catch(err => reject(err))
                    }
                    catch(e) {
                            reject(e)
                    }
                })
                .catch(err => reject(err))
                }) 
        } catch (error) {
            throw new BadGatewayException(error);
        }
      }
    
}
