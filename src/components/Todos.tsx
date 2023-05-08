import { api } from "~/utils/api";
import { Todo } from "~/components/Todo";

export function Todos() {
  const {data: todos, isLoading, isError} = api.todo.all.useQuery()

  if(isLoading) {
    return (
      <div>
        <div></div>
        <p>loading...</p>
      </div>
    )
  }
  if(isError){
    return (
      <div>
        <p>Error fetching todos</p>
      </div>
    )
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <section key={todo.id} >
            <Todo todo={todo} />
          </section>
        )
      })}
    </>
  )
}