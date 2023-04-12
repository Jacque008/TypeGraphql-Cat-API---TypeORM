import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { Cat } from "../entity/Cat";
import { AppDataSource } from "../data-source";

@Resolver()
export class CatResolver {
  @Query(() => Cat)
  async getCat(@Arg("id") id: number): Promise<Cat | undefined> { 
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return undefined;
    }
    return cat;
  }

  @Query(() => [Cat])
  async getCats(@Arg("limit") limit: number): Promise<Cat[]> {
    const catRepository = AppDataSource.getRepository(Cat);
    return await catRepository.find({ take: limit });
  }

  @Mutation(() => Cat)
  async addCat(
    @Arg("name") name: string,
    @Arg("age") age: number,
    @Arg("breed") breed: string,
    @Arg("color") color: string,
    @Arg("energy_level") energy_level: number,
    @Arg("temperament", () => [String]) temperament: string[]
  ): Promise<Cat> {
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = new Cat();
    cat.name = name;
    cat.age = age;
    cat.breed = breed;
    cat.color = color;
    cat.energy_level  = energy_level;
    cat.temperament = temperament;
    cat.createdAt = new Date();
    return await catRepository.save(cat);
  }

  @Mutation(() => Boolean)
  async removeCat(@Arg("id") id: number): Promise<boolean> {
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return false;
    }
    await catRepository.remove(cat);
    return true;
  }

  @Mutation(() => Cat)
  async feedCat(@Arg("id") id: number): Promise<Cat | undefined> {
    const catRepository = AppDataSource.getRepository(Cat);
    const cat = await catRepository.findOneBy({id: id});
    if (!cat) {
      return undefined;
    }
    cat.energy_level += 1;
    return await catRepository.save(cat);
  }
}
