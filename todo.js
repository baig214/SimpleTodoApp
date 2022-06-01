function todoCtrls($scope) {

$scope.todos=[{text:'Learn JS',done:false},{text:'Build an app',done:false}];
$scope.Totaltodo= function (){return $scope.todos.length;};
$scope.addTodo =function() {

    if($scope.formTodoText!=null)
    {
    $scope.todos.push({text:$scope.formTodoText,done:false});
    $scope.formTodoText='';
    }
    else
    {
        $scope.formTodoText="Please Enter the todo";
    }
};

$scope.clearCompleted = function() {
    $scope.todos=_.filter($scope.todos, function(todo) {
        return !todo.done;
    })
}
}