const Child = require('../models/childModel');
const State = require('../models/stateModel');
const District = require('../models/districtModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.getAllChilds = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Child.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const childs = await features.query;

  res.status(200).json({
    status: 200,
    results: childs.length,
    data: {
      childs,
    },
  });
});

exports.getChild = catchAsync(async (req, res, next) => {
  const child = await Child.findById(req.params.id);
  res.status(200).json({
    status: 200,
    data: {
      child,
    },
  });
});

exports.getState = catchAsync(async (req, res, next) => {
  const state = await State.find();
  Console.log('Hello');
  res.status(200).json({
    status: 200,
    data: {
      state,
    },
  });
});

exports.getDistrict = catchAsync(async (req, res, next) => {
  const district = await District.find();
  res.status(200).json({
    status: 200,
    data: {
      district,
    },
  });
});

exports.createChild = catchAsync(async (req, res, next) => {
  const newChild = await Child.create(req.body);
  res.status(201).json({
    status: 201,
    data: {
      child: newChild,
    },
  });
});

exports.createState = catchAsync(async (req, res, next) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).json({
      status: 201,
      data: {
        message: 'Record Already Exists',
      },
    });
  }
  const exist = await State.findById(req.body.state_id);
  if (exist) {
    res.status(400).json({
      status: 201,
      data: {
        message: 'Record Already Exists',
      },
    });
  }
  const newState = await State.create({
    state_id: req.body.state_id,
    state_name: req.body.state_name,
  });
  res.status(201).json({
    status: 201,
    data: {
      state: newState,
    },
  });
});

exports.createDistrict = catchAsync(async (req, res, next) => {
  const newDistrict = await District.create(req.body);
  res.status(201).json({
    status: 201,
    data: {
      district: newDistrict,
    },
  });
});
